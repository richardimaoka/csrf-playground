export default function Page() {
  const onClick = () => {
    // Build formData object.
    fetch("http://localhost:3999/api/set-cookie", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "set_cookie_name=John&set_cookie_value=John123",
    });
  };

  return (
    <main>
      <button onClick={onClick}>call set cookie</button>
    </main>
  );
}
