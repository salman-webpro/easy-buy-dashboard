import React, { useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarCharts = ({ selectedOffer }) => {
    const [isExpired, setIsExpired] = useState(true);
    let [OfferConversionCharts, setOfferConversionCharts] = useState(null);
    // const colorRef = useRef(true);

    useEffect(() => {
        setIsExpired(Boolean(selectedOffer?.offerStatus !== 'Active'));
        setOfferConversionCharts({
            series: [
                {
                    name: 'Inflation',
                    data: [23, 31, 40, 50, 40, 36, 32, 23, 14, 8, 5, 2, 45],
                },
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    },
                },
                colors: [isExpired === true ? '#FF0000' : '#f15a2d'],
                grid: {
                    show: true,
                    borderColor: '#f1f1f1',
                },
                xaxis: {
                    categories: [
                        'Day 1',
                        'Day 2',
                        'Day 3',
                        'Day 4',
                        'Day 5',
                        'Day 6',
                        'Day 7',
                        'Day 8',
                        'Day 9',
                        'Day 10',
                        'Day 11',
                        'Day 12',
                        'Day 13',
                    ],
                    position: 'bottom',
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                    crosshairs: {
                        fill: {
                            type: 'gradient',
                            gradient: {
                                colorFrom: '#D8E3F0',
                                colorTo: '#BED1E6',
                                stops: [0, 100],
                                opacityFrom: 0.4,
                                opacityTo: 0.5,
                            },
                        },
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
                yaxis: {
                    axisBorder: {
                        show: true,
                    },
                    axisTicks: {
                        show: true,
                    },
                    labels: {
                        show: true,
                        formatter: function (val) {
                            return val + '%';
                        },
                    },
                },
            },
        });
    }, [selectedOffer]);
    return (
        <div>
            {Boolean(selectedOffer) && (
                <ReactApexChart
                    options={OfferConversionCharts.options}
                    series={OfferConversionCharts.series}
                    type='bar'
                    height={300}
                />
            )}
        </div>
    );
};
export default BarCharts;
