
import useStyles from './MyStyle';
import MyAppbar from './MyAppbar';
import MyDrawer from './MyDrawer';

export default function Layout({ children }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <MyAppbar />
            <MyDrawer />
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )

}

