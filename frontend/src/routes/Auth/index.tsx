import React, { FormEventHandler, useCallback } from 'react';

export const Auth: React.FC = () => {
  const handleSubmit = useCallback<
    NonNullable<FormEventHandler<HTMLFormElement>>
  >((evt) => {
    evt.preventDefault();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" />
      <input name="password" type="password" />
    </form>
  );
};
