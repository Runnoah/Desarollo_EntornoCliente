function App() {
// comentario
return (
<>
<h1>Componentes en marcha</h1>
<h2>Fragmentos y composición</h2>
{/* Comentario dentro del jsx? */}
{/* Comentario añadido con CTRL K + CTRL C */}
<ParentComponent />
</>
)

}
export default App

function ParentComponent() {
    return (
    <>
    <UserComponent />
    <ProfileComponent />
    <FeedComponent />
    </>
    )
}
function UserComponent() {
    return <h2>User component</h2>
}
function ProfileComponent() {
    return <h2>Profile component</h2>
}
function FeedComponent() {
return <h2>Feed component</h2>
}