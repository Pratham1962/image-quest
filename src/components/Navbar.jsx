
import {AppBar,Toolbar, Typography, styled} from '@mui/material';
import {Collections} from '@mui/icons-material';

const Header= styled(AppBar)`
    background: #28282B;
`

const Navbar = () => {
    return(
        <Header position='sticky'> 
            <Toolbar>
                <Collections/>
                <Typography variant='h6'>Image Quest</Typography>
            </Toolbar>
        </Header>
    )
}

export default Navbar;