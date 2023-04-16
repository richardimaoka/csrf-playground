export default function Page() {
  const onClick = () => {
    // Build formData object.
    let formData = new FormData();
    formData.append("name", "John");
    formData.append("password", "John123");
    fetch("http://localhost:3999/api/set-cookie", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <main>
      <button onClick={onClick}>call set cookie</button>
    </main>
  );
}
