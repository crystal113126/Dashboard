export const createNivoDataTotal = (data, platforms,property ) => {
    const nivoData = platforms.map((platform) => {
      return {
        id: platform,
        data: data[platform].map((entry) => ({ x: entry.date, y: entry[property] })),
      };
    });
  
    return nivoData;
  };



export const createNivoData = (data, property, platform) => {
    const nivoData = [
      {
        id: platform,
        data: data.map((entry) => ({ x: entry.date, y: entry[property] })),
      },
    ];
  
    return nivoData;
  };

 export  const createBarDataTotal = (data, platforms, property) => {
     const barData = platforms.map((platform) => {
      if (!data[platform] || data[platform].length === 0) {
        return null;
      }
  
      const lastIndex = data[platform].length - 1;
      const lastEntry = data[platform][lastIndex];
  
      return {
        id: platform,
        ...lastEntry[property]
      };
    });
  
    return barData.filter((entry) => entry !== null);
  };

  export const createBarData = (data, platforms, property) => {
    const barData = platforms.map((platform) => {
      const lastIndex = data.length - 1;
      const lastEntry = data[lastIndex];
      return {
        id: platform,
        ...lastEntry[property]
      }
    });
    
    return barData.filter((entry) => entry !== null);
    };

  export const locationData = (data,platform) => {
    if (!data[platform] || data[platform].length === 0) {
      return null;
    }

    const lastIndex = data[platform].length - 1;
    const lastEntry = data[platform][lastIndex];

    return {
      ...lastEntry.country,
    };
  };

  export const createGeographyData= (data, twoToThreeLetterCodeMapping) => {
    return Object.entries(data).map(([twoLetterCode, value]) => ({
      id: twoToThreeLetterCodeMapping[twoLetterCode],
      value: value * 100, 
    }));
  };


  export const formatDataForNivo = (data, keys) => {
   
    return data.map((d) => {
      const formattedEntry = { id: d.id };
      keys.forEach((key) => {
        formattedEntry[key] = d[key]*100  || 0;
      });
      return formattedEntry;
    });
  };


