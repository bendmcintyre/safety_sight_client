import api from '../utils/api';

class InspectionService {
  getInspections() {
    // Implement logic to fetch inspections via API
    return api.get('/inspections');
  }

    createInspection(inspection: any) { // or a more specific type if you have one
    // Implement logic to create new inspection via API
    return api.post('/inspections', inspection);
    }

}

export default new InspectionService();
