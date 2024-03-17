import { Box, Divider, Typography } from "@mui/material";
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
    return(
        <>
            <Box id="Footer">
                <div className="el">
                    <PhonelinkRingIcon sx={{ fontSize: '100px', color: 'rgb(30, 127, 255)' }}/>
                    <Typography variant="h5" sx={{ color: 'white', textAlign: 'center' }}>رقم الهاتف</Typography>
                    <a href="tel:01558730809" style={{ textDecoration: 'none', color: 'blue' }}><Typography variant="subtitle1">01558730809</Typography></a>
                </div>
                <div className="el">
                    <AccessTimeIcon sx={{ fontSize: '100px', color: 'rgb(30, 127, 255)' }}/>
                    <Typography variant="h5" sx={{ color: 'white', textAlign: 'center' }}>مواعيد العمل</Typography>
                    <Typography variant="subtitle1">من 9 صباحا الى 10 مساءا</Typography>
                    <Typography variant="subtitle2">طوال أيام الأسبوع</Typography>
                </div>
                <div className="el">
                    <LocationOnIcon sx={{ fontSize: '100px', color: 'rgb(30, 127, 255)' }}/>
                    <Typography variant="h5" sx={{ color: 'white', textAlign: 'center' }}>خدمتنا</Typography>
                    <Typography variant="subtitle1">خدماتنا بالقاهرة والجيزة والقليوبية و الغربيه</Typography>
                </div>
            </Box>
            <Divider />
            <Box id="dv">
                <Typography variant="p" sx={{ textAlign: 'right' }}>Powered by كريازي لصيانة الاجهزة المنزلية-الصيانة بالمنزل وبالضمان</Typography>
                <Typography variant="p" sx={{ textAlign: 'right' }}>احصل علي تجربة رائعة مع خدمة الصيانة بالمنزل</Typography>
            </Box>
        </>
    )
}

export default Footer;