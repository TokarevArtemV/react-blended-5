import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';
import { exchangeCurrency } from 'service/exchangeAPI';

export const ExchangeForm = () => {
  const handleForm = e => {
    e.preventDefault();
    const formData = e.currentTarget.elements.currencyRequest.value;
    const [amount, from, , to] = formData.split(' ');
    exchangeCurrency({ amount, from, to });
  };
  return (
    <form className={styles.form} onSubmit={handleForm}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        title="Request format 15 USD in UAH"
        className={styles.input}
        name="currencyRequest"
        required
      />
    </form>
  );
};
