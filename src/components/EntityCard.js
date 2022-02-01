import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

function EntityCard({ data, handleDelete }) {

    return (
        <div>
            <Card elevation={1} >
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(data.iName)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={data.iName}
                    subheader={data.iParentEntity}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {data.iAddress}<br />
                        {data.iCity}<br />
                        {data.iState}<br />
                        {data.iPin}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default EntityCard