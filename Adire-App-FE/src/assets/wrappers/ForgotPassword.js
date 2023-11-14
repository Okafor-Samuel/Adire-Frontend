import styled from 'styled-components';

const Wrapper = styled.div`

.content {
  margin-top: 0.75rem;
  text-align: center;
}

.title {
  color: #111827;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
}

.message {
  margin-top: 0.5rem;
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.actions {
  margin: 0.75rem 1rem;
}

.desactivate {
  display: inline-flex;
  padding: 0.5rem 1rem;
  background-color: #DC2626;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  justify-content: center;
  width: 100%;
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: transparent;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.cancel {
  display: inline-flex;
  margin-top: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  color: #374151;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  justify-content: center;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid #D1D5DB;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.link-btn {
    color: var(--primary-500);
    display: inline-block;
    font-size: var(--small-text);
    margin: 0 auto;
    background: transparent;
    border-color: transparent;
    /* letter-spacing: var(--letterSpacing); */
    cursor: pointer;
    transition: var(--transition);
    text-transform: capitalize;
}
.link-btn:hover {
  color: var(--primary-500);
  box-shadow: 0 2px var(--primary-500);
}

.btn-container {
    text-align: center;
    margin-block: 1rem;
}


`;

export default Wrapper;