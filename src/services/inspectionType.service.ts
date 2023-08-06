import { api } from '../utils/api';

class InspectionTypeService {
  getInspectionTypes() {
    // Implement logic to fetch inspection types via API
    return api.categories.inspections.list();
  }

  createInspectionType(inspectionType: any) { // or a more specific type if you have one
    // Implement logic to create new inspection type via API
    return api.categories.inspections.create(inspectionType);
  }
}

export default new InspectionTypeService();
