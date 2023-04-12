export default function Form() {
  return (
    <main>
      <form action="http://localhost:3999/api/set-cookie" method="POST">
        <input type="text" name="set_cookie_name" />
        <input type="text" name="set_cookie_value" />
        <input type="submit" />
      </form>
    </main>
  );
}
