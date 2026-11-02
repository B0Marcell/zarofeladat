function Panel({ color }) {
  return (
    <div
      className="panel"
      style={{ backgroundColor: color ? color.rgb : "transparent" }}
    >
      {color ? "" : "Még nincs kiválasztott szín"}
    </div>
  );
}

export default Panel;
