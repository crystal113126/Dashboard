import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../../assert/data/geoFeatures";
import { tokens } from "../../theme";


const GeographyChart = ({data}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveChoropleth
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
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 100]}
      unknownColor="#666666"
      colors="nivo"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={120}
      projectionTranslation={ [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      legends={[
    
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
               },
             ]}
    />
  );
};

export default GeographyChart;
