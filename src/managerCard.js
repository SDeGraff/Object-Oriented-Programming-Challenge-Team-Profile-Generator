function managerCard(manager) {
    return `
    <div class="card employee-card">
    <div class="card-header">
        
        <h2 class="card-title">${manager.name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.role}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">${manager.department}</li>

            <li class="list-group-item">${manager.id}</li>
            <li class="list-group-item">${manager.email}</li>
            <li class="list-group-item">${manager.officeNumber}</li>
            </ul>
            </div>
            </div>
            `;
        }
        module.exports = managerCard;
               
