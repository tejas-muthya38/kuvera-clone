import "./styles.css";

export default function SaveSmart() {
  return (
    <div className="save-smart">
      <p>Start SaveSmart today</p>
      <div className="input-group">
        <span>₹</span>
        <input type="text" placeholder="0" />
      </div>
      <span className="save-smart-footer">
        (Minimum amount you can save is ₹ 5000)
      </span>
    </div>
  );
}
