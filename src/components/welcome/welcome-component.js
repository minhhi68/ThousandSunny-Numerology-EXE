import React, { useEffect, useState } from 'react'
import Style from './welcome-component.module.scss'
import logo from '../../assets/images/logo.png'

const WelcomeComponent = () => {
    const [showLogo, setShowLogo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(false);
        }, 3000); // 3000 milliseconds (3 seconds)

        return () => clearTimeout(timer);
    }, []);

    const handleButtonOnclick = () => {
        window.location.href = '/analyze-page';
    }

    return (
        <div className={Style.body}>
            {showLogo ? <div>
                <img src={logo} alt="logo" />
                <div className={Style.text}>PSYCHICAL</div>
            </div> :
                <p>- Thần số học (Numerology) hay còn được gọi là Nhân số học là bộ môn Khoa học nghiên cứu về sự tác động sóng rung của các con số với đời sống con người.
                    <br />
                    <br />
                    - Thần số học chính là tấm gương phản chiếu hành trình của một người dưới dạng con số. Nhờ đó, ta đó có thể định hình đặc điểm tính cách, sức mạnh và số phận của người đó thông qua họ tên và ngày tháng năm sinh.
                    <br />
                    <br />
                    - Thần Số Học xuất hiện từ rất lâu đời và cho đến thời điểm hiện tại đã có nhiều thay đổi, hệ thống của Thần Số Học cũng được phân chia thành 4 hệ thống chính:
                    <ul>
                        <li>
                            Hệ thống Thần Số Học Chaldean: bắt nguồn từ Babylon cổ đại. Hệ thống này chỉ luận giải bắt đầu từ số 1 đến số 8, số 9 được xem là con số thiêng liêng, chỉ sử dụng con số đó nếu nó là tổng của các con số khác.
                        </li>
                        <li>
                            Hệ thống Thần Số Học Kabbalah: hướng tới kiến thức đến từ linh hồn và tinh thần, bắt nguồn từ đạo thần bí Do Thái, tập trung diễn giải theo tên chứ không sử dụng ngày sinh.
                        </li>
                        <li>
                            Hệ thống Thần số học Pytago (Pythagoras): được tin rằng do nhà Triết Học, nhà Toán Học, nhà Số Học Pythagoras phát minh ra và trên thực tế nó đã được truyền lại bởi học trò của ông – Philolaus. Hệ thống này sử dụng kết hợp cả ngày sinh và tên để tính các con số tượng trưng cho cuộc đời mỗi người. Những con số sử dụng là từ số 1 tới số 9 và thêm hai số đặc biệt 11 và 22.
                        </li>
                        <li>
                            Hệ thống Thần Số Học I Ching: Đây được xem là kinh cổ nhất của Trung Hoa, cách luận giải theo I Ching chỉ tập trung vào giải đoán những bí ẩn của vận mệnh, tìm hiểu bao quát cuộc sống được đề cao hơn là cố gắng vén màn tương lai.
                        </li>
                    </ul>
                    <br />
                    - Biết được con số chủ đạo( bằng cách cộng ngày tháng năm sinh) giúp cho bạn định hướng nghề nghiệp phù hợp với bản thân hơn, dễ thành công hơn. Chính các đặc điểm của các con số chủ đạo trong Thần số học giúp bạn định hướng tương lai tốt hơn. Các bạn trẻ đang loay hoay chưa tìm được định hướng cho riêng mình, thì nên tìm hiểu về con số chủ đạo của bản thân, để đưa ra các quyết định đúng đắn.
                    <br /><br /><div className='d-flex justify-content-center'><button className='btn btn-light border-6' onClick={handleButtonOnclick}>Đã hiểu</button></div>
                </p>
            }

        </div >
    )
}

export default WelcomeComponent
