import "./Signin.scss";

function Signin() {
  return (
    <form className="signin">
      <table className="signin__form">
        <tbody>
          <tr className="signin__form--row">
            <td>
              <label htmlFor="account">Tài khoản</label>
            </td>
            <td>
              <input type="text" placeholder="Tên tài khoản" name="account" autoComplete="off" />
            </td>
          </tr>
          <tr className="signin__form--row">
            <td>
              <label htmlFor="password">Mật khẩu</label>
            </td>
            <td>
              <input type="password" placeholder="Mật khẩu" name="password" />
            </td>
          </tr>
          <tr className="signin__form--row">
            <td>
              <label htmlFor="password">Số điện thoại</label>
            </td>
            <td>
              <input type="text" placeholder="Số điện thoại" name="password" />
            </td>
          </tr>
        </tbody>
      </table>

      <button className="signin__submit" type="submit">
        Đăng ký
      </button>
    </form>
  );
}

export default Signin;
