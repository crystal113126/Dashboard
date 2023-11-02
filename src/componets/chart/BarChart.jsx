import React  from 'react';
import { useTheme , Box} from "@mui/material";
import { tokens } from '../../theme';
import { ResponsiveBar } from '@nivo/bar';
//import { genderData as data } from '../../assert/data/mockData';

const BarChartGender = (props) =>
{ 
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
     
        <ResponsiveBar
      data={props.data}
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
      keys={props.keys}//{['Female', 'Male', "Unidentified", "Other"]}
      indexBy="id"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.5}
      valueScale={{ type: "linear" }}
      indexScale={{type:"band", round: true}}
      colors={["#CF9FFF", "#1F4581", "#E75480", "#E6DBAC", "#ADD8E6"]}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      animate={true}
      enableLabel={true}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        // changed
        
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "percentage",
        legendPosition: "middle",
        legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      enableGridX={true}
      enableGridY={true}
     
      legends={[
        {
            dataFrom: 'keys',
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 2,
            translateY: 50,
            itemsSpacing: 0,
            itemWidth: 80,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 10,
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemOpacity: 1
                    }
                }
            ]
        }
    ]}
     
    />



    )
}

export default BarChartGender;