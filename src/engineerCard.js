function engineercard(engineer){
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${engineer.role}</h6>
        <p class="card-text">ID: ${engineer.id}</p>
        <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="card-text">GitHub: <a href="
        https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
    </div>
    `
}

module.exports = engineercard;



