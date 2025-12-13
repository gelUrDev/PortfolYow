function RadialGradient({ height, width }) {
  return (
    <div
      className="blob"
      style={{
        height: height,
        width: width,
        borderRadius: "100%",
        background:
          "radial-gradient(circle, hsla(189, 94%, 34%, 0.090) 20%, hsla(223, 55%, 17%, 0.01) 70%)",
      }}
    ></div>
  );
}

export default RadialGradient;
