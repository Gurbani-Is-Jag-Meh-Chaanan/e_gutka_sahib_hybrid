export default async ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  const promiseSetupDb = setupDb();
  inject("asyncDb", promiseSetupDb);
};

async function setupDb() {
  const sqlPromise = window.initSqlJs({
    locateFile: (filename) => `/${filename}`,
  });
  const dataPromise = fetch("shabad_os.sqlite").then((res) =>
    res.arrayBuffer()
  );
  const [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);
  const db = new SQL.Database(new Uint8Array(buf));
  return db;
}
