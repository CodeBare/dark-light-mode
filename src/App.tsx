import {Box, Container, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {useEffect, useState} from "react";
import {ReactComponent as MobileLight} from './assets/undraw_mobile_development_light.svg';
import {ReactComponent as MobileDark} from './assets/undraw_mobile_development_dark.svg';
import {ReactComponent as SupportLight} from './assets/undraw_instant_support_light.svg'
import {ReactComponent as SupportDark} from './assets/undraw_instant_support_dark.svg'
import {ReactComponent as TeachingLight} from './assets/undraw_teaching_light.svg'
import {ReactComponent as TeachingDark} from './assets/undraw_teaching_light.svg'
import {DarkMode, Facebook, GitHub, Instagram, LightMode, LinkedIn, Twitter, YouTube} from "@mui/icons-material";

const light_primary = '#ff5c5c'
const light_secondary = '#1b9999'
const light_onPrimary = 'rgb(250, 250, 250)'
const light_onBackground = 'rgb(66, 66, 66)'
const light_onBackgroundAlt = 'rgba(66, 66, 66, 0.7)'
const light_background = 'rgb(255, 255, 255)'
const box_shadow = '0 5px 20px 1px rgba(0, 0, 0, 0.5)'
const dark_primary = '#9641ff'
const dark_secondary = '#03dac5'
const dark_onPrimary = '#000000'
const dark_onBackground = 'rgba(255, 255, 255, 0.9)'
const dark_onBackgroundAlt = 'rgba(255, 255, 255, 0.7)'
const dark_background = '#121212'

const useStyles = makeStyles({
    container: {
        height: '100vh',
        minWidth: '100vw',
        backgroundColor: (props: any) => props.theme === 'light' ? light_background : dark_background,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231b9999' fill-opacity='0.3'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        color: (props: any) => props.theme === 'light' ? light_onBackground : dark_onBackground,
        overflowY: 'auto',
        scrollBehavior: 'smooth'
    },
    section: {
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    h1: {
        fontSize: '100px',
        marginBottom: 0,
        fontFamily: 'Kaushan Script, sans-serif'
    },
    h2: {
        fontSize: '32px',
        fontWeight: 'normal',
        textAlign: 'center',
        color: (props: any) => props.theme === 'light' ? light_onBackgroundAlt : dark_onBackgroundAlt
    },
    nav: {
        zIndex: 10,
        position: 'fixed',
        fontSize: '24px',
        letterSpacing: '3px',
        padding: '25px',
        width: '100vw',
        fontFamily: 'Oswald, sans-serif',
        background: 'rgb(255 255 255 / 50%)',
        '& a': {
            marginRight: '25px',
            color: (props: any) => props.theme === 'light' ? light_primary : dark_primary,
            textDecoration: 'none',
            borderBottom: '3px solid transparent',
            fontWeight: 'bold'
        },
        '& a:hover': {
            color: (props: any) => props.theme === 'light' ? light_onBackground : dark_onBackground,
            borderBottom: '3px solid'
        },
        '& a:focus': {
            color: (props: any) => props.theme === 'light' ? light_onBackground : dark_onBackground,
            borderBottom: '3px solid'
        }
    },
    imageContainer: {
        border: '1px solid',
        borderColor: (props: any) => props.theme === 'light' ? light_secondary : dark_secondary,
        borderRadius: '10px',
        padding: '10px 20px',
        marginRight: '25px',
        width: 'auto',
        background: (props: any) => props.theme === 'light' ? light_background : dark_background,
        boxShadow: box_shadow,
        '& svg': {
            height: '300px',
            width: '300px'
        }
    },
    buttons: {
        marginTop: '15px',
        marginBottom: '50px',
        '& button': {
            minWidth: '100px',
            height: '40px',
            cursor: 'pointer',
            borderRadius: '10px',
            marginRight: '10px',
            border: '2px solid',
            borderColor: (props: any) => props.theme === 'light' ? light_primary : dark_primary,
            fontSize: '15px',
            outline: 'none',
            '&:disabled': {
                opacity: 0.4,
                cursor: 'default'
            },
            '&:hover': {
                filter: 'brightness(110%)'
            },
        }
    },
    primary: {
        background: (props: any) => props.theme === 'light' ? light_primary : dark_primary,
        color: (props: any) => props.theme === 'light' ? light_onPrimary : dark_onPrimary
    },
    secondary: {
        border: '2px solid',
        borderColor: (props: any) => props.theme === 'light' ? light_secondary : dark_secondary,
        background: (props: any) => props.theme === 'light' ? light_secondary : dark_secondary,
        '&:hover': {
            background: (props: any) => props.theme === 'light' ? light_secondary : dark_secondary,
            color: (props: any) => props.theme === 'light' ? light_onPrimary : dark_onPrimary
        }
    },
    outline: {
        background: (props: any) => props.theme === 'light' ? light_background : dark_background,
        color: (props: any) => props.theme === 'light' ? light_onBackground : dark_onBackground,
        '&:hover': {
            background: (props: any) => props.theme === 'light' ? light_primary : dark_primary,
            color: (props: any) => props.theme === 'light' ? light_onPrimary : dark_onPrimary
        }
    },
    icons: {
        '& svg': {
            fontSize: '100px',
            marginRight: '50px',
            cursor: 'pointer',
            color: (props: any) => props.theme === 'light' ? light_primary : dark_primary,
            '&:hover': {
                color: (props: any) => props.theme === 'light' ? light_onBackground : dark_onBackground
            }
        }
    },
    switch: {
        color: (props: any) => props.theme === 'light' ? light_primary : dark_primary
    },
    toggleText: {
        position: 'relative',
        top: '-4px',
        right: '5px',
        color: (props: any) => props.theme === 'light' ? light_onBackground : dark_onBackground
    },
    themeSwitch: {
        display: 'inline-block',
        height: '34px',
        minHeight: '34px',
        position: 'relative',
        width: '60px',
        '& input': {
            display: 'none',
        }
    },
    slider: {
        background: (props: any) => props.theme === 'light' ? '#CCCCCC' : light_primary,
    },
})

const App = (props: any) => {
    const [sTheme, setTheme] = useState<'light'|'dark'>('light')
    const classes = useStyles({
        ...props,
        theme: sTheme
    })

    useEffect(() => {
        const mode: string | null = localStorage.getItem('lightDarkMode')
        if(Boolean(mode)) {
            setTheme(mode as 'light' | 'dark')
        }
    }, [])

    return (
        <Container disableGutters className={classes.container}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100,
                position: 'fixed',
                right: '25px',
                top: '25px',
                '& span': {
                    marginRight: '10px',
                    fontSize: '1rem'
                }
            }}>
                <span >
                    <span className={classes.toggleText}>{`${sTheme.toUpperCase()} MODE`}</span>
                    {sTheme === 'light' ? <LightMode /> : <DarkMode />}
                </span>
                <label className={classes.themeSwitch}>
                    <input type={'checkbox'} checked={sTheme === 'light'} onClick={() => {
                        let theme: 'light' | 'dark' = sTheme === 'light' ? 'dark' : 'light'
                        setTheme(theme)
                        localStorage.setItem('lightDarkMode', theme)
                    }} />
                    <div className={`${classes.slider} slider`}></div>
                </label>
            </Box>
            <nav id={'nav'} className={classes.nav}>
                <a href={'#home'}>Home</a>
                <a href={'#about'}>About</a>
                <a href={'#projects'}>Projects</a>
                <a href={'#contact'}>Contact</a>
            </nav>
            <Box component={'section'}
                 className={classes.section}
                 id={'home'}>
                <Box>
                    <h1 className={classes.h1}>
                        Custom Title Here
                    </h1>
                    <h2 className={classes.h2}>
                        Welcome to the website
                    </h2>
                </Box>
            </Box>
            <Box component={'section'}
                 className={classes.section}
                 id={'about'}>
                <Typography variant={'h1'} className={classes.h1}>
                    Undraw Illustrations
                </Typography>
                <Box sx={{ display: 'flex' }}>
                    <Box className={classes.imageContainer}>
                        <h2 className={classes.h2}>
                            Training
                        </h2>
                        {sTheme === 'light' ? <TeachingLight /> : <TeachingDark /> }
                    </Box>
                    <Box className={classes.imageContainer}>
                        <h2 className={classes.h2}>
                            Development
                        </h2>
                        {sTheme === 'light' ? <MobileLight /> : <MobileDark />}
                    </Box>
                    <Box className={classes.imageContainer}>
                        <h2 className={classes.h2}>
                            Support
                        </h2>
                        {sTheme === 'light' ? <SupportLight /> : <SupportDark />}
                    </Box>
                </Box>
            </Box>
            <Box component={'section'}
                 className={classes.section}
                 id={'projects'}>
                <h1 className={classes.h1}>
                    Buttons
                </h1>
                <Box className={classes.buttons}>
                    <button className={classes.primary}>Primary</button>
                    <button className={classes.secondary}>Secondary</button>
                    <button className={classes.primary} disabled>Disabled</button>
                    <button className={classes.outline}>Outline</button>
                    <button className={`${classes.secondary} ${classes.outline}`}>Alt Outline</button>
                    <button className={classes.outline} disabled>Disabled</button>
                </Box>
                <Typography sx={{
                    width: '40%',
                    textAlign: 'justify',
                    background: 'rgb(0 0 0 / 50%)',
                    color: sTheme === 'light' ? light_onPrimary : dark_onBackgroundAlt,
                    borderRadius: '10px',
                    padding: '30px',
                    margin: 0,
                    lineHeight: '25px'
                }} component={'p'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat blandit aliquam etiam erat velit. Amet mauris commodo quis imperdiet massa tincidunt nunc. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere.
                </Typography>
            </Box>
            <Box component={'section'}
                 className={classes.section}
                 id={'contact'}>

                <Box className={classes.icons}>
                    <GitHub />
                    <LinkedIn />
                    <Instagram />
                    <Twitter />
                    <YouTube />
                    <Facebook />
                </Box>
            </Box>
        </Container>
    );
}

export default App;
