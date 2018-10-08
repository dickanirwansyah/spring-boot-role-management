import { Routes, RouterModule } from '@angular/router';
import { UploadCorporateComponent } from "./upload-corporate.component";
import { ModuleWithProviders } from "@angular/core";

export const UploadCorporateRoutes: Routes = [
    {
        path: '',
        component: UploadCorporateComponent,
        data: {
            pageTitle: 'Upload Corporate'
        }
    }
];

export const UploadCorporateRouting:ModuleWithProviders = RouterModule.forChild(UploadCorporateRoutes);

