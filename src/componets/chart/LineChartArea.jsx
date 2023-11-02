import React  from 'react';
import { ResponsiveLine } from "@nivo/line";
import { tokens } from '../../theme';
import { useTheme } from '@emotion/react';

const LineChartTest = ({data, days}) =>
{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode); 
    let tickValues = "every 2 days";
    if (days > 30 ) {
      tickValues = "every 10 days";}
      else if (days === 30){
        tickValues ="every 5 days";
      }


return (
  
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
<ResponsiveLine
 animate
 data={data}
 theme = {{
  
    axis:{
        domain: {
            line: {
                stroke: colors.grey[200],
            },
        },
        legend:{
            text: {
                fill:colors.grey[200],
            },
        },
        ticks:{
            line: {
                stroke: colors.blueAccent[100],
                strokeWidth:1,
            },
            text:{
                fill:colors.blueAccent[100],
            },
        },
    },
    grid: {
      line: {
          stroke: colors.grey[400], // Set the color for grid lines
          opacity: 0.5, // Set the opacity of grid lines
      },
  },
    legends: {
        text: {
          fill: colors.grey[100],
        },
      },
      tooltip: {
        container: {
          color: colors.primary[300],
        },
      },
 }}
 //colors={{ scheme: 'category10' }}
 margin={{ bottom: 50, left: 60, right: 50, top: 50}}
 yScale={{
    type: 'linear', 
    min: "auto",
    max: "auto"

  }}
 axisBottom={{
   format: '%b %d',
   tickValues: tickValues
 }}
 axisLeft={{
   legend: 'Followers',
   legendOffset: 12
 }}
 curve="monotoneX"
 enableArea={true}
 areaBaselineValue={0}
 areaOpacity={0.5}
 pointBorderWidth={1}
 colors={['#3b5998', '#25F4EE']}
 pointSize={16}
 pointSymbol={function noRefCheck(){}}
 useMesh 
 xFormat="time:%Y-%m-%d"
 xScale={{
   format: '%Y-%m-%d',
   precision: 'day',
   type: 'time',
   useUTC: false
 }}
 enableGridX={true}
 enableGridY={true}
 legends={[
    {
        anchor: 'bottom',
        direction: 'row',
        justify: false,
        translateX: 30,
        translateY: 52,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
            {
                on: 'hover',
                style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                }
            }
        ]
    }
]}
 
/>
)
}

export default LineChartTest;

