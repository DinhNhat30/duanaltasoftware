import React from 'react';
import LogoAlta from '../images/Logo alta.png';
import LogoRight from '../images/Frame.png';
import styles from '../password/passforgot.css';

function ForgotPass() {
return (
<div className={styles.forgotPass}>
<div className={styles.boxForgotPass}>
<div className={styles.forgotPassLeft}>
<div className={styles.logoLeft}>
<img src={LogoAlta} alt="Logo" />
</div>
<div className={styles.textRight}>
<p>Đặt lại mật khẩu</p>
</div>
<div className={styles.textRights}>
<p>Vui lòng nhập email để đặt lại mật khẩu của bạn*</p>
</div>
<div className={styles.input}>
<input type='text' />
</div>
<div className={styles.cancel}>
<button type='button'>Huỷ</button>
</div>
<div className={styles.resume}>
<button type='button'>Tiếp tục</button>
</div>
</div>
<div className={styles.forgotPassRight}>
<div className={styles.logoRight}>
<img src={LogoRight} alt="Frame" />
</div>
</div>
</div>
</div>
);
}

export default ForgotPass;