import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from "./upload.component";
import { ModuleWithProviders } from "@angular/core";

export const UploadRoutes: Routes = [
    {
        path: '',
        component: UploadComponent,
        data: {
            pageTitle: 'Upload'
        }
    }
];

export const UploadRouting:ModuleWithProviders = RouterModule.forChild(UploadRoutes);

