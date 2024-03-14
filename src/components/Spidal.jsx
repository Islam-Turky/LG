import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const actions = [
{ icon: <img src="/Orange_logo.svg" alt="" width="100%" height="100%"/>, name: '01200718934', color: 'purple', route: 'tel:01200718934' },
{ icon: <img src="/Orange_logo.svg" alt="" width="100%" height="100%"/>, name: '01284111059', color: 'green', route: 'tel:01284111059' },
{ icon: <img src="/We_logo.svg" alt="" width="100%" height="100%"/>, name: '01558730809', color: 'primary', route: 'tel:01558730809' },
];

export default function BasicSpeedDial() {
    return (
        <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: 'fixed', bottom: 16, right: 16, color: 'red'}}
            icon={<LocalPhoneIcon />}
        >
            {actions.map((action) => (
                <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                sx={{ color: action.color }}
                onClick={() => window.location.href = action.route}
                >
                </SpeedDialAction>
            ))}
        </SpeedDial>
    );
}