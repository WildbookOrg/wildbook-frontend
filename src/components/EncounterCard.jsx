import React from 'react';
import { FormattedMessage } from 'react-intl';
import { format } from 'date-fns';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from './Link';

export default function EncounterCard({ encounter }) {
  const {
    user,
    profile,
    photoCount,
    matchCount,
    submissionDate,
    status,
  } = encounter;
  return (
    <Card style={{ width: 240 }} elevation={0}>
      <CardActionArea>
        <CardMedia
          style={{ height: 160, width: 240 }}
          image={profile}
          title="Encounter photo"
        >
          {status === 'ready-for-review' && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                color: 'white',
                backgroundColor: 'rgba(255, 60, 60, 0.88)',
                width: '100%',
                height: 40,
              }}
            >
              <Typography
                style={{
                  textAlign: 'center',
                  marginTop: 10,
                }}
              >
                Ready for Identification Review
              </Typography>
            </div>
          )}
        </CardMedia>
        <CardContent>
          <Typography>
            {format(submissionDate, 'MMMM dd, yyyy')}
          </Typography>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              >
                <FormattedMessage
                  id="PHOTO_COUNT"
                  values={{ photoCount: parseInt(photoCount) }}
                />
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              >
                <FormattedMessage
                  id="MATCH_COUNT"
                  values={{ matchCount: parseInt(matchCount) }}
                />
              </Typography>
            </Grid>
            <Typography variant="subtitle2">
              <FormattedMessage id="SUBMITTED_BY" />
              <Link>{user}</Link>
            </Typography>
          </Grid>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions> */}
    </Card>
  );
}