function internCard(intern){
    return `
    <div class="card">
    <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${intern.role}</h6>
        <p class="card-text">ID: ${intern.id}</p>
        <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        </div>
        </div>
        `
}