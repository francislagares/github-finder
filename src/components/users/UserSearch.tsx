import React, { useState } from 'react';
import { useAlertContext } from 'contexts/alert/AlertContext';
import { searchUsers } from 'contexts/github/GithubActions';
import { useGithubContext } from 'contexts/github/GithubContext';
import { ActionType } from 'contexts/github/types/Actions';

const UserSearch = () => {
  const [text, setText] = useState('');
  const { users, dispatch } = useGithubContext();
  const { setAlert } = useAlertContext();

  const handleChange = (e: Change) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: Submit) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter some text', 'error');
    } else {
      dispatch({ type: ActionType.SET_LOADING });

      const users = await searchUsers(text);

      dispatch({ type: ActionType.GET_USERS, payload: users });

      setText('');
    }
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search'
                value={text}
                onChange={handleChange}
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {users.length > 0 && (
          <button
            className='btn btn-ghost btn-lg'
            onClick={() => dispatch({ type: ActionType.CLEAR_USERS })}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
