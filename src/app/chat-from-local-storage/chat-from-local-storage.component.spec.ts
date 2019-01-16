import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFromLocalStorageComponent } from './chat-from-local-storage.component';

describe('ChatFromLocalStorageComponent', () => {
  let component: ChatFromLocalStorageComponent;
  let fixture: ComponentFixture<ChatFromLocalStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatFromLocalStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFromLocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
