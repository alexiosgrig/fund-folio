import React, { useEffect, useState } from 'react';
import { IMetricsPayload, IMetricsResponse } from '../services/IMetricsData';
import { getMetricsData } from '../services/services';

export const Metrics = () => {
  const [data, setData] = useState<IMetricsResponse>([]);
  const [loading, setLoading] = useState(false);

  const searchMetrics = async (payload: IMetricsPayload) => {
    setLoading(true);
    try {
      const res = await getMetricsData(payload);
      setData(res);
      setLoading(false);
      const period = '2022-09-2';
      const result = res?.series?.annual.map((value) => {
        const found = value.find((item) => item.period === period);
        return found;
      });
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    searchMetrics({ symbol: 'AAPL' });
    console.log(data.series);
  }, []);
  return <></>;
};
