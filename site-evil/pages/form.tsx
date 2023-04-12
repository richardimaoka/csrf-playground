export default function Form() {
  return (
    <main>
      <form action="http://localhost:3999/" method="POST">
        <input
          type="hidden"
          name="csrfmiddlewaretoken"
          value="nc98P987bcpncYhoadjoiydc9ajDlcn"
        />
        <input type="text" name="tweet" />
        <input type="submit" />
      </form>
    </main>
  );
}
