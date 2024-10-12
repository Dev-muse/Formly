<div
  className="buttons
"
>
  <Button
    type="submit"
    label={userId && userId !== 'new' ? 'Update User' : 'Create User'}
    className="p-mt-2"
  />
  <Button
    type="button"
    label="Cancel"
    className="p-mt-2 p-ml-2 cancel"
    onClick={() => navigate('/')}
  />
</div>;
