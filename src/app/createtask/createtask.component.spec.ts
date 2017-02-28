import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";
import {RouterOutletMap} from "@angular/router";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {AppSingletonService} from "../app.singletonservice";
import {CreateTaskComponent} from "./createtask.component";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

describe('CreateTaskComponent', function () {
  let de: DebugElement;
  let comp: CreateTaskComponent;
  let fixture: ComponentFixture<CreateTaskComponent>;
  let service: AppSingletonService;

  class MockRouter {

  }

  class MockActivateRouter {

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTaskComponent],
      providers: [RouterOutletMap, AppSingletonService],
      imports: [RouterTestingModule, HttpModule, FormsModule, CommonModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTaskComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
    service = fixture.debugElement.injector.get(AppSingletonService);
  });

  it('should create component', () => {
    spyOn(service, 'addTask').and.returnValue(Observable.of<any>(
      [{
        date: '',
        title: '',
        description: '',
        priority: ''
      }]
      )
    );
    comp.create("", "", "", "");
    expect(comp.myTasks).toEqual([{
      date: '',
      title: '',
      description: '',
      priority: ''
    }])
  });

});
