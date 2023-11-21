import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import astroData from '../../mock-data/data.json';

const AnalyzeDetailComponent = () => {

    const navigation = useNavigate();

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Biểu đồ chu kì vận hạn của bạn trong các năm',
            },
        },
    };

    const handleButtonClick = () => {
        navigation('/buy-vip');
    }


    const location = useLocation();
    const dataProps = location.state;
    const labels = astroData.years;


    const data = {
        labels,
        datasets: [
            {
                label: 'Chu kỳ vận hạn',
                data: dataProps.yearCircle,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    return (
        <div className='container mt-5'>
            <h3>Chu Kỳ Vận Hạn</h3>
            <Line options={options} data={data} />
            <div className='mt-3'>
                <div dangerouslySetInnerHTML={{ __html: dataProps.detailInfo }} />
            </div>
            <div className='mt-3'>
                <h3>Tính cách</h3>
                <div dangerouslySetInnerHTML={{ __html: dataProps.personality }} />
            </div>
            <div className='m-5 text-center'>
                <button className="btn btn-warning w-50" onClick={handleButtonClick}>MUA VIP</button><br />
                <button className="btn-secondary btn w-50 my-2" onClick={() => navigation(-1)}>QUAY VỀ</button>
            </div>
        </div>
    )
}


export default AnalyzeDetailComponent
