import { Provider } from 'react-redux';
import './Root.css';
import PageContainer from '../PageContainer/PageContainer';

const Root = ({ store }) => (
  <Provider store={store}>
    <PageContainer />
  </Provider>
);

export default Root;
