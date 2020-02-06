import React, { useState } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";

const InfoBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
`;
const Contents = styled.div`
    display: inherit;
    flex-direction: column;
    margin-left: 30px;
`;

const Category = styled.span`
    font-weight: 700;
    font-size: 20px;
    margin-right: 10px;
    
`;

const Profile = styled.div`
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: center center;
  width: 185px;
    height: 280px;
`

const Charts = () => {

    const [series, setSeries] = useState([{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100],
    }])
    const [options, setoptions] = useState(
        {
            chart: {
                height: 350,
                type: 'radar',
            },
            title: {
                text: '학생 포트폴리오'
            },
            xaxis: {
                categories: ['Speaking', 'Writing', 'Listening', 'Reading', 'Grammer']
            }
        }
    )
    return (
        <div>
            <InfoBox>
                <Profile background={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjYBVd9MD-pnIIKGjJS1tdx2PiprjCtF7_X1tvNK87PE1ETh7H'}/>
                <Contents>
                <div style={{marginBottom: '20px'}}>
                    <Category>
                        이름:
                    </Category>
                    사공정훈
                </div>
                <div style={{marginBottom: '20px'}}>
                    <Category>
                        나이: 
                    </Category>
                    10
                </div>
                <div style={{marginBottom: '20px'}}>
                    <Category>
                        주소:
                    </Category>
                    부산 광역시 해운대구 우동
                </div>
                <div style={{marginBottom: '20px'}}>
                    <Category>
                        연락처:
                    </Category>
                    01055045331
                </div>
                <div style={{marginBottom: '20px'}}>
                    <Category>
                        출석률:
                    </Category>
                </div>
                </Contents>
            </InfoBox>
            <Chart options={options} series={series} type="radar" height={350} />
        </div>
    )


}

// class Charts extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {

//           series: [{
//             name: 'Series 1',
//             data: [80, 50, 30, 40, 100, 20],
//           }],
//           options: {
//             chart: {
//               height: 350,
//               type: 'radar',
//             },
//             title: {
//               text: 'Basic Radar Chart'
//             },
//             xaxis: {
//               categories: ['January', 'February', 'March', 'April', 'May', 'June']
//             }
//           },


//         };
//       }

//       render() {
//         return (


//     <div id="chart">
// <Chart options={this.state.options} series={this.state.series} type="radar" height={350} />
// </div>


//         );
//       }
// }

export default Charts;
