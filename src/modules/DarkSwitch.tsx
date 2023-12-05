import { Switch } from 'antd';
import { Sun, Moon } from 'react-feather';

const DarkSwitch = () => {

    const handleSwitch = (checked: boolean) => {
        document.body.classList.toggle('darkmode', checked);
    };

    return (
        <Switch className="dark-switch" checkedChildren={<Moon/>} unCheckedChildren={<Sun/>} onChange={handleSwitch}/>
    );
}

export default DarkSwitch;
