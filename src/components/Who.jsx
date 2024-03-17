import { Typography, Box } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BuildIcon from '@mui/icons-material/Build';
import PaidIcon from '@mui/icons-material/Paid';

const Who = () => {
    return(
        <Box className="content" sx={{ marginTop: '40px' }}>
            <Typography variant="h2" element="p" sx={{
                textAlign: 'center',
                color: 'black',
                fontSize: '35px',
                fontWeight: 'bold'
            }}>إليك أهم ألأسباب لإختيارك مركزنا</Typography>
            <Typography variant="p" sx={{ textAlign: 'center' }}>
            لن يتم نقل الجهاز من البيت لاي سبب الصيانة تتم لدينا بالمنزل فلدينا جميع الحلول لصيانة الاجهزة المنزلية بالمنزل ,خدمات الصيانة الشاملة لجهازك, بمافي ذلك استكشاف الاخطاء واصلاحها وايضا الاصلاحات والاستبدال    
            </Typography>
            <div className="element">
                {/* <div> */}
                    <SettingsIcon className="icon"/>
                    <Typography variant="h5">قطع غيار أصلية</Typography>
                {/* </div> */}
                <Typography variant="subtitle1">قطع غيار اصلية داخل او خارج الضمان</Typography>
            </div>
            <div className="element">
                {/* <div> */}
                    <SupportAgentIcon className="icon"/>
                    <Typography variant="h4">دعم فنى</Typography>
                {/* </div> */}
                <Typography variant="subtitle1">دعم فنى من خبراء متخصصين لتوفير اعلى سبل الراحة</Typography>
            </div>
            <div className="element">
                {/* <div> */}
                    <BuildIcon className="icon"/>
                    <Typography variant="h4">خدمه 24 ساعه</Typography>
                {/* </div> */}
                <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>وذلك لان الصيانة تتم في نفس اليوم حيث ان الفني يتوقع قطع الغيار التالفة ويقوم بتحضيرها قبل الذهاب للعميل وذلك حرصا منا علي توفير وقت العميل</Typography>
            </div>
            <div className="element">
                {/* <div> */}
                    <PaidIcon className="icon"/>
                    <Typography variant="h4">أسعارنا تنافسيه</Typography>
                {/* </div> */}
                <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>وذلك لحرصنا علي تقديم افضل خدمة ممكنة لعملائنا الكرام باقل تكلفة ممكنة</Typography>
            </div>
        </Box>
    )
};

export default Who;