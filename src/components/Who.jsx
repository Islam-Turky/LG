import { Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BuildIcon from '@mui/icons-material/Build';
const Who = () => {
    return(
        <div className="content">
            <div className="element">
                <div>
                    <Typography variant="h4">قطع غيار أصلية</Typography>
                    <SettingsIcon className="icon"/>
                </div>
                <Typography variant="subtitle1">قطع غيار اصلية داخل او خارج الضمان</Typography>
            </div>
            <div className="element">
                <div>
                    <Typography variant="h4">دعم فنى</Typography>
                    <SupportAgentIcon className="icon"/>
                </div>
                <Typography variant="subtitle1">دعم فنى من خبراء متخصصين لتوفير اعلى سبل الراحة</Typography>
            </div>
            <div className="element">
                <div>
                    <Typography variant="h4">خدمه 24 ساعه</Typography>
                    <BuildIcon className="icon"/>
                </div>
                <Typography variant="subtitle1">خدمه متواصله طول اليوم</Typography>
            </div>
        </div>
    )
};

export default Who;