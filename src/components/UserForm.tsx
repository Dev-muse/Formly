import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { User } from '../types';
import {
  loadUser,
  handleInputChange,
  handleAddressChange,
  handleSubmit,
  validateForm,
} from '../userFormUtils';

const UserForm: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<Partial<User>>({
    address: {},
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (userId && userId !== 'new') {
      loadUser(parseInt(userId, 10), setUser, setLoading, setError, navigate);
    }
  }, [userId, navigate]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleInputChange(e, setUser);
  const onAddressChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleAddressChange(e, setUser);
  const onSubmit = (e: React.FormEvent) =>
    handleSubmit(
      e,
      user,
      userId,
      setSubmitted,
      setLoading,
      setError,
      navigate,
      () => validateForm(user)
    );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <form onSubmit={onSubmit} className="p-fluid container">
      <div className="p-field">
        <label htmlFor="firstName">First Name*</label>
        <InputText
          id="firstName"
          name="firstName"
          value={user.firstName || ''}
          onChange={onInputChange}
          required
          className={classNames({ 'p-invalid': submitted && !user.firstName })}
        />
        {submitted && !user.firstName && (
          <small className="p-error">First Name is required.</small>
        )}
      </div>

      <div className="p-field">
        <label htmlFor="lastName">Last Name*</label>
        <InputText
          id="lastName"
          name="lastName"
          value={user.lastName || ''}
          onChange={onInputChange}
          required
          className={classNames({ 'p-invalid': submitted && !user.lastName })}
        />
        {submitted && !user.lastName && (
          <small className="p-error">Last Name is required.</small>
        )}
      </div>

      <div className="p-field">
        <label htmlFor="email">Email*</label>
        <InputText
          id="email"
          name="email"
          value={user.email || ''}
          onChange={onInputChange}
          required
          className={classNames({ 'p-invalid': submitted && !user.email })}
        />
        {submitted && !user.email && (
          <small className="p-error">Email is required.</small>
        )}
      </div>

      <div className="p-field">
        <label htmlFor="phone">Phone*</label>
        <InputText
          id="phone"
          name="phone"
          value={user.phone || ''}
          onChange={onInputChange}
          required
          className={classNames({ 'p-invalid': submitted && !user.phone })}
        />
        {submitted && !user.phone && (
          <small className="p-error">Phone is required.</small>
        )}
      </div>

      <div className="p-field">
        <label htmlFor="username">Username*</label>
        <InputText
          id="username"
          name="username"
          value={user.username || ''}
          onChange={onInputChange}
          required
          className={classNames({ 'p-invalid': submitted && !user.username })}
        />
        {submitted && !user.username && (
          <small className="p-error">Username is required.</small>
        )}
      </div>

      <div className="p-field">
        <label htmlFor="age">Age* (18-120)</label>
        <InputNumber
          id="age"
          name="age"
          value={user.age}
          onValueChange={(e) => setUser({ ...user, age: e.value || 0 })}
          min={18}
          max={120}
          required
          className={classNames({
            'p-invalid':
              submitted && (!user.age || user.age < 18 || user.age > 120),
          })}
        />
        {submitted && (!user.age || user.age < 18 || user.age > 120) && (
          <small className="p-error">Age must be between 18 and 120.</small>
        )}
      </div>

      <div className="p-field">
        <label htmlFor="height">Height* (cm, 100-250)</label>
        <InputNumber
          id="height"
          name="height"
          value={user.height}
          onValueChange={(e) => setUser({ ...user, height: e.value || 0 })}
          min={100}
          max={250}
          required
          className={classNames({
            'p-invalid':
              submitted &&
              (!user.height || user.height < 100 || user.height > 250),
          })}
        />
        {submitted &&
          (!user.height || user.height < 100 || user.height > 250) && (
            <small className="p-error">
              Height must be between 100 and 250 cm.
            </small>
          )}
      </div>

      <div className="p-field">
        <label htmlFor="weight">Weight* (kg, 30-300)</label>
        <InputNumber
          id="weight"
          name="weight"
          value={user.weight}
          onValueChange={(e) => setUser({ ...user, weight: e.value || 0 })}
          min={30}
          max={300}
          required
          className={classNames({
            'p-invalid':
              submitted &&
              (!user.weight || user.weight < 30 || user.weight > 300),
          })}
        />
        {submitted &&
          (!user.weight || user.weight < 30 || user.weight > 300) && (
            <small className="p-error">
              Weight must be between 30 and 300 kg.
            </small>
          )}
      </div>

      <div className="p-field">
        <label htmlFor="birthDate">Birth Date*</label>
        <Calendar
          id="birthDate"
          name="birthDate"
          value={user.birthDate ? new Date(user.birthDate) : undefined}
          onChange={(e) =>
            setUser({ ...user, birthDate: e.value?.toISOString() || '' })
          }
          required
          className={classNames({ 'p-invalid': submitted && !user.birthDate })}
        />
        {submitted && !user.birthDate && (
          <small className="p-error">Birth Date is required.</small>
        )}
      </div>

      <div className="p-field">
        <label htmlFor="gender">Gender*</label>
        <Dropdown
          id="gender"
          name="gender"
          value={user.gender}
          options={['male', 'female', 'other']}
          onChange={(e) => setUser({ ...user, gender: e.value })}
          required
          className={classNames({ 'p-invalid': submitted && !user.gender })}
        />
        {submitted && !user.gender && (
          <small className="p-error">Gender is required.</small>
        )}
      </div>

      <div className="p-field">
        <label htmlFor="bloodGroup">Blood Group*</label>
        <Dropdown
          id="bloodGroup"
          name="bloodGroup"
          value={user.bloodGroup}
          options={['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']}
          onChange={(e) => setUser({ ...user, bloodGroup: e.value })}
          required
          className={classNames({ 'p-invalid': submitted && !user.bloodGroup })}
        />
        {submitted && !user.bloodGroup && (
          <small className="p-error">Blood Group is required.</small>
        )}
      </div>

      <div className="p-field">
        <label htmlFor="address">Address*</label>
        <InputText
          id="address"
          name="address"
          value={user.address?.address || ''}
          onChange={onAddressChange}
          required
          className={classNames({
            'p-invalid': submitted && !user.address?.address,
          })}
        />
        {submitted && !user.address?.address && (
          <small className="p-error">Address is required.</small>
        )}
      </div>

      <div className="p-field">
        <label htmlFor="city">City*</label>
        <InputText
          id="city"
          name="city"
          value={user.address?.city || ''}
          onChange={onAddressChange}
          required
          className={classNames({
            'p-invalid': submitted && !user.address?.city,
          })}
        />
        {submitted && !user.address?.city && (
          <small className="p-error">City is required.</small>
        )}
      </div>

      <div className="p-field">
        <label htmlFor="state">State*</label>
        <InputText
          id="state"
          name="state"
          value={user.address?.state || ''}
          onChange={onAddressChange}
          required
          className={classNames({
            'p-invalid': submitted && !user.address?.state,
          })}
        />
        {submitted && !user.address?.state && (
          <small className="p-error">State is required.</small>
        )}
      </div>

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
      </div>
    </form>
  );
};

export default UserForm;
