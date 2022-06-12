import DoughnutChart from '../components/DoughnutChart.js'

// ...
const doughnutChartQuery = {
    measures: ['Orders.count'],
    timeDimensions: [{
        dimension: 'Orders.createdAt',
    }, ],
    filters: [],
    dimensions: ['Orders.status'],
};

return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        // ..
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <DoughnutChart query={doughnutChartQuery}/>
        </Grid>
      </Grid>
    </div>
);
