import { Box, Divider, Typography } from "@mui/material";
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
    return(
        <>
            <Box id="Footer">
                <div className="el">
                    <PhonelinkRingIcon sx={{ fontSize: '80px', color: 'rgb(30, 127, 255)' }}/>
                    <Typography variant="h5" sx={{ color: 'white', textAlign: 'center' }}>رقم الهاتف</Typography>
                    <a href="tel:01558730809" style={{ textDecoration: 'none', color: 'blue' }}><Typography variant="subtitle1">01558730809</Typography></a>
                    <a href="tel:01558730809" style={{ textDecoration: 'none', color: 'blue' }}><Typography variant="subtitle1">01558730809</Typography></a>
                    <a href="tel:01558730809" style={{ textDecoration: 'none', color: 'blue' }}><Typography variant="subtitle1">01558730809</Typography></a>
                </div>
                <div className="el">
                    <AccessTimeIcon sx={{ fontSize: '80px', color: 'rgb(30, 127, 255)' }}/>
                    <Typography variant="h5" sx={{ color: 'white', textAlign: 'center' }}>مواعيد العمل</Typography>
                    <Typography variant="subtitle1" sx={{ direction:'rtl' }}>24 ساعه</Typography>
                    <Typography variant="subtitle2">طوال أيام الأسبوع</Typography>
                </div>
                <div className="el">
                    <LocationOnIcon sx={{ fontSize: '80px', color: 'rgb(30, 127, 255)' }}/>
                    <Typography variant="h5" sx={{ color: 'white', textAlign: 'center' }}>خدمتنا</Typography>
                    <Typography variant="subtitle2">خدماتنا بالقاهرة والجيزة والقليوبية و الغربيه و جميع المحافظات</Typography>
                </div>
            </Box>
            <Divider />
            <Box id="dv">
                <Typography variant="p" sx={{ textAlign: 'right', flex: '1' }}>Powered by إل جي لصيانة الاجهزة المنزلية-الصيانة بالمنزل وبالضمان</Typography>
                <Typography variant="p" sx={{ textAlign: 'right', flex: '1' }}>احصل علي تجربة رائعة مع خدمة الصيانة بالمنزل</Typography>
            </Box>
        </>
    )
}

export default Footer;