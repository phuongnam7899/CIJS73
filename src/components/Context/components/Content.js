import { ThemeContext } from "../Context";
import { translate } from "../helpers";

export const Content = () => {
    // useContext
  return (
    <div>
      <div>{translate('vi', 'login')}</div>
    </div>
  );
};
