import { api } from '../utils/api';

class InspectionTypeService {
  getInspectionTypes() {
    // Implement logic to fetch inspection types via API
    return api.get('/inspectionTypes');
  }

  createInspectionType(inspectionType: any) { // or a more specific type if you have one
  // Implement logic to create new inspection type via API
  return api.post('/inspectionTypes', inspectionType);
}

}

export default new InspectionTypeService();
