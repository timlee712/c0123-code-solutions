export default function CustomButton({ text, color }) {
  const buttonStyle = {
    backgroundColor: color
  };
  return (
    <button style={buttonStyle}>
      { text }
    </button>
    );
}
