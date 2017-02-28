import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {Router, RouterOutletMap, ActivatedRoute} from "@angular/router";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {AppSingletonService} from "../app.singletonservice";
import {Observable} from "rxjs/Observable";
import {EditTaskComponent} from "./edittask.component";
import "rxjs/add/observable/of";

describe('EditTaskComponent', function () {
  let de: DebugElement;
  let comp: EditTaskComponent;
  let fixture: ComponentFixture<EditTaskComponent>;
  let service: AppSingletonService;

  class MockRouter {

  }

  class MockActivatedRouter {
    params = Observable.of<any>({'id': 1})
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditTaskComponent],
      providers: [RouterOutletMap, AppSingletonService, {provide: Router, useClass: MockRouter},
        {provide: ActivatedRoute, useClass: MockActivatedRouter}],
      imports: [RouterTestingModule, HttpModule, FormsModule, CommonModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaskComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(AppSingletonService);
  });

  it('it should be able to get data from service and edit for a particular task id', () => {
    spyOn(service, 'updateTask').and.returnValue(
      Observable.of<any>(
        [{
          _id: '',
          date: '',
          title: '',
          description: '',
          priority: ''
        }]
      )
    );
    comp.create("", "", "", "");
    expect(comp.myTasks).toEqual([{
      _id: '',
      date: '',
      title: '',
      description: '',
      priority: ''
    }])
  });

});
