import "./TableDetail.scss";

import LazyLoad from "../../UI/LazyLoad/LazyLoad";

function TableDeTail({ data }) {
  return (
    <table className="table-detail">
      <tbody>
        <tr>
          <td className="left">CPU</td>
          <td className="right">{data !== undefined ? data.chip : <LazyLoad />}</td>
        </tr>
        <tr>
          <td className="left">RAM</td>
          <td className="right">{data !== undefined ? data.ram : <LazyLoad />}</td>
        </tr>
        <tr>
          <td className="left">Màn hình</td>
          <td className="right">{data !== undefined ? data.screen : <LazyLoad />}</td>
        </tr>
        <tr>
          <td className="left">Đồ họa</td>
          <td className="right">{data !== undefined ? data.card : <LazyLoad />}</td>
        </tr>
        <tr>
          <td className="left">Audio</td>
          <td className="right">{data !== undefined ? data.audio : <LazyLoad />}</td>
        </tr>
        <tr>
          <td className="left">Hệ điều hành</td>
          <td className="right">{data !== undefined ? data.win : <LazyLoad />}</td>
        </tr>
        <tr>
          <td className="left">PIN</td>
          <td className="right">{data !== undefined ? data.PIN : <LazyLoad />}</td>
        </tr>
        <tr>
          <td className="left">Năm xuất xứ</td>
          <td className="right">{data !== undefined ? data.year : <LazyLoad />}</td>
        </tr>
        <tr>
          <td className="left">Bộ nhớ trong</td>
          <td className="right">{data !== undefined ? data.rom : <LazyLoad />}</td>
        </tr>
        <tr>
          <td className="left">Độ phân giải</td>
          <td className="right">{data !== undefined ? data.px : <LazyLoad />}</td>
        </tr>
        <tr>
          <td className="left">Tần số quét</td>
          <td className="right">144 Hz</td>
        </tr>
        <tr>
          <td className="left">Màn hình cảm ứng</td>
          <td className="right">Không</td>
        </tr>
        <tr>
          <td className="left">Tấm nền</td>
          <td className="right">IPS</td>
        </tr>
        <tr>
          <td className="left">Công nghệ</td>
          <td className="right">Acer ComfyView Anti-glare LED-backlit</td>
        </tr>
        <tr>
          <td className="left">Hỗ trợ RAM</td>
          <td className="right">32 GB</td>
        </tr>
        <tr>
          <td className="left">Tốc độ RAM</td>
          <td className="right">2933 MHz</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableDeTail;
